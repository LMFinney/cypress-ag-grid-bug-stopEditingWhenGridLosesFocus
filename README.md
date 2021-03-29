# CypressAgGridBug

This is a small repo to demonstrate a bug that occurs in a Cypress test
when using an ag-grid editable grid with the stopEditingWhenGridLosesFocus
flag on Chromium.

This is a toy app to expose the bug which was really discovered in a 
proprietary codebase.

## Steps to reproduce

1. Clone this repo.
2. Run `yarn` to install dependencies
3. Run `yarn e2e --watch` to run Cypress in watch mode.
4. See a successful running test (it loads a table of sample data, asserts
   the values, changes two of the values with text that has multiple
   characters, and asserts that the new values are accepted).
5. Make a trivial change to `app.spec.ts` (like adding a space at the end of a line).
6. See that the second run will fail (only the last characters of the
   new values will be visible).
   
## Notes

The bug manifests under these conditions:
* Hot reload
* On Electron 87, Chrome 89, and Edge 89
* With stopEditingWhenGridLosesFocus used in ag-grid

The bug does not manifest under these conditions:
* Initial execution
* After hitting the replay button
* On Firefox 86 (I have not tested other browsers)
* Without the stopEditingWhenGridLosesFocus flag

This seems to be the same general problem that was reported in
https://github.com/cypress-io/cypress/issues/5394, but that was apparently
fixed. I don't know if this demonstrates a regression, or if it was a
previously-unknown corner case.

## Reported

This issue was reported both to [Cypress](https://github.com/cypress-io/cypress/issues/15675)
and [ag-grid (paywall)](https://ag-grid.zendesk.com/hc/en-us/requests/17230).
