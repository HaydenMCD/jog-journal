# Runner App Changelog :calendar:

## Merged :heavy_check_mark:

- [`#46`](https://github.com/HaydenMCD/jog-journal/pull/46) Anthony Legg - Sprint 1

- [`#43`](https://github.com/HaydenMCD/jog-journal/pull/43) Hayden McDowall - Revert "#26 create sign up screen merge to Development"

- [`#37`](https://github.com/HaydenMCD/jog-journal/pull/37) Hayden McDowall - #26 create sign up screen merge to Development

- [`#24`](https://github.com/HaydenMCD/jog-journal/pull/24) Hayden McDowall - 3 link to firebase database merge into Development

- [`#23`](https://github.com/HaydenMCD/jog-journal/pull/23) Hayden McDowall - 15 create statistics view merge into Development

- [`#20`](https://github.com/HaydenMCD/jog-journal/pull/20) Hayden McDowall - Merge 15-create-statistics-view to main

- [`#14`](https://github.com/HaydenMCD/jog-journal/pull/14) Hayden McDowall - Kilometer input section merge into main



### Refactored

- [`ab16314`](https://github.com/HaydenMCD/jog-journal/commit/ab163146eb68072c04eb3f3097bd191a693ab03f) 30 July 2025 Anthony Legg - refactor: move tanstack router config to lib directory

update `main.jsx` and `vite.config.js` with new path to the generated routes file
- [`2074638`](https://github.com/HaydenMCD/jog-journal/commit/2074638d9e5351d7318adcb882bc832ecce5abeb) 15 July 2025 Anthony Legg - #8 refactor useAuthContext

export useauth hook
- [`353ea20`](https://github.com/HaydenMCD/jog-journal/commit/353ea207a6ac00d9390a3a8b3c31dd67d6cea821) 15 July 2025 Anthony Legg - #8 refactor useAuthContext

update firebase.js to use env variables in place of hardcoded values
- [`ed0f526`](https://github.com/HaydenMCD/jog-journal/commit/ed0f526e1d337fbc7eea3429ac659b89e0bec2de) 12 July 2025 Anthony Legg - #8 style: refactor __root.jsx so the header is outside main tag

comment added for where to place a footer in future
- [`a5d83fe`](https://github.com/HaydenMCD/jog-journal/commit/a5d83fe630818335f6ae0881da2a3ca7deeb81c7) 12 July 2025 Anthony Legg - #8 refactor `header.jsx` so it displays

based on auth state which is currently hardcoded in the header itself
- [`af5d787`](https://github.com/HaydenMCD/jog-journal/commit/af5d787fabe25017bd1884c8d0572b2dff525ade) 21 June 2025 Anthony Legg - #28 refactor `kilometerinput.css` to use tailwind

### Bug Fixes

- [`02002e8`](https://github.com/HaydenMCD/jog-journal/commit/02002e81966ae0d8d193ce2e4db48b3eb1b30d3e) 26 July 2025 Anthony Legg - fix: install bug fix for security warning 
- [`3801f0f`](https://github.com/HaydenMCD/jog-journal/commit/3801f0f6edee2656e0f9629b0acf8839f8ed6553) 10 July 2025 Anthony Legg - #8 debug loading public homepage 
- [`1cea097`](https://github.com/HaydenMCD/jog-journal/commit/1cea097f1424a9554051055fc2a4df913e0c0553) 2 July 2025 Anthony Legg - Merge PR #51 from 11-bug-cannot-type-in-kilometer-input

## Completed

1. created constants for increment/decrement steps and for decimal place numbers
2. prevented users getting to negative number values #18 
3. converted the text input back to a number input
- added additional css to the body tag in `app.css` to prevent the default number input displaying increment/decrement buttons.

## Additional fix

1. updated husky pre-commit hook by removing the `&& git add .` so that files not meant to be committed are not added automatically. 
- [`6b31536`](https://github.com/HaydenMCD/jog-journal/commit/6b31536904a43755555f99370dbe44af429282c8) 28 June 2025 Anthony Legg - #33 bug: fix husky commit scripts

update new post-commit so that it only handles changelog 
- [`052fa29`](https://github.com/HaydenMCD/jog-journal/commit/052fa29d0ed5643fc4182d569c5013ca62396c7f) 28 June 2025 Anthony Legg - #33 bug: fix husky commit scripts

add new post-commit 
- [`9946c8f`](https://github.com/HaydenMCD/jog-journal/commit/9946c8f7f48f17fb370096445427330e5c94d833) 11 June 2025 Anthony Legg - #28 bug fix progress bar `var()` line 13 


### Reverted

- [`8c6f330`](https://github.com/HaydenMCD/jog-journal/commit/8c6f330a417335a9faede62d02ea3509052160a9) 10 July 2025 Anthony Legg - #8 revert: remove `react-router` deps and config
- [`8a7b926`](https://github.com/HaydenMCD/jog-journal/commit/8a7b9262a73ced5f70a10629d3cf2aaa16d1fcc7) 10 July 2025 Anthony Legg - Revert "#8 reconfigure vite.config.js"

This reverts commit 03545930215547746d4756219a91c777ff633c99.
- [`f22c4cb`](https://github.com/HaydenMCD/jog-journal/commit/f22c4cb4d455e5a058d5e00ae706d4852546baa9) 10 July 2025 Anthony Legg - Revert "#8 create react-router required files"

This reverts commit d91a0858bbc54cdeedb6c86f829f74817b7117b1.

Signed-off-by: Anthony Legg &lt;anthony.legg@outlook.com&gt;
- [`f67e716`](https://github.com/HaydenMCD/jog-journal/commit/f67e7169c6c1fcf2a88aa1759a2ccebc73376e4d) 9 July 2025 Anthony Legg - #8 revert: remove previous node packages

## Commits :heavy_check_mark:

- [`ab16314`](https://github.com/HaydenMCD/jog-journal/commit/ab163146eb68072c04eb3f3097bd191a693ab03f) 30 July 2025 Anthony Legg - refactor: move tanstack router config to lib directory

update `main.jsx` and `vite.config.js` with new path to the generated routes file

- [`02002e8`](https://github.com/HaydenMCD/jog-journal/commit/02002e81966ae0d8d193ce2e4db48b3eb1b30d3e) 26 July 2025 Anthony Legg - fix: install bug fix for security warning

- [`2074638`](https://github.com/HaydenMCD/jog-journal/commit/2074638d9e5351d7318adcb882bc832ecce5abeb) 15 July 2025 Anthony Legg - #8 refactor useAuthContext

export useauth hook

- [`353ea20`](https://github.com/HaydenMCD/jog-journal/commit/353ea207a6ac00d9390a3a8b3c31dd67d6cea821) 15 July 2025 Anthony Legg - #8 refactor useAuthContext

update firebase.js to use env variables in place of hardcoded values

- [`aa93ac6`](https://github.com/HaydenMCD/jog-journal/commit/aa93ac62b231eb795301c00c52b50f10ac9b5614) 14 July 2025 Anthony Legg - #8 add typescript dev deps

- [`ad5dc2a`](https://github.com/HaydenMCD/jog-journal/commit/ad5dc2aabc7e22a8d7cdd74f778d70be5c37e227) 14 July 2025 Anthony Legg - #8 init useAuthProvider hook

requires typescript to manage input and response data

- [`e0a9f20`](https://github.com/HaydenMCD/jog-journal/commit/e0a9f206d58e5a31ede2174862f879a4ca602db6) 14 July 2025 Anthony Legg - #8 complete inital useAuthContext hook structure

- [`94a9e83`](https://github.com/HaydenMCD/jog-journal/commit/94a9e83de887a1cb0d427044985dd1a4f14e175a) 14 July 2025 Anthony Legg - #8 init auth context file

- [`faf187a`](https://github.com/HaydenMCD/jog-journal/commit/faf187a32a1a90850019b699c8957170276ca023) 13 July 2025 Anthony Legg - add app name as env variable

use in the `header.jsx` file

- [`262e77d`](https://github.com/HaydenMCD/jog-journal/commit/262e77d0d46102d06514c416ad807a3fc25d8ce7) 13 July 2025 Anthony Legg - #8 update (protected) & (auth) routes

add wrapper class to layout templates

- [`ab3481c`](https://github.com/HaydenMCD/jog-journal/commit/ab3481c1f59646602eec7089e9fd999e0845dd12) 12 July 2025 Anthony Legg - #8 create protected route layout

- [`47924d2`](https://github.com/HaydenMCD/jog-journal/commit/47924d2b407334a9c4e7ebe88cdc0020bb814abb) 12 July 2025 Anthony Legg - #8 reorganise auth route so layout route is hidden

- [`f88ecba`](https://github.com/HaydenMCD/jog-journal/commit/f88ecbaa5be0874cd3b8f1eeec86aeb4eb16a16d) 12 July 2025 Anthony Legg - #8 create auth routes

including auth layout file

- [`ed0f526`](https://github.com/HaydenMCD/jog-journal/commit/ed0f526e1d337fbc7eea3429ac659b89e0bec2de) 12 July 2025 Anthony Legg - #8 style: refactor __root.jsx so the header is outside main tag

comment added for where to place a footer in future

- [`a5d83fe`](https://github.com/HaydenMCD/jog-journal/commit/a5d83fe630818335f6ae0881da2a3ca7deeb81c7) 12 July 2025 Anthony Legg - #8 refactor `header.jsx` so it displays

based on auth state which is currently hardcoded in the header itself

- [`3801f0f`](https://github.com/HaydenMCD/jog-journal/commit/3801f0f6edee2656e0f9629b0acf8839f8ed6553) 10 July 2025 Anthony Legg - #8 debug loading public homepage

- [`1cdeb6b`](https://github.com/HaydenMCD/jog-journal/commit/1cdeb6b9c566918689782993ca7dba8bd6575936) 10 July 2025 Anthony Legg - #8 configure files for routing to home page

- [`3efbac4`](https://github.com/HaydenMCD/jog-journal/commit/3efbac424706a447c68d30105384d7c834bcb944) 10 July 2025 Anthony Legg - #8 create required `__root.jsx` file

- [`34b47ad`](https://github.com/HaydenMCD/jog-journal/commit/34b47addfdf89e8248d8e226eb8567c20d2be8a9) 10 July 2025 Anthony Legg - #8 add new router config

`vite.config.js`

- [`148e284`](https://github.com/HaydenMCD/jog-journal/commit/148e2845fbb78475706c30985402bc3450516ce0) 10 July 2025 Anthony Legg - #8 add tanstack router to vite.config

- [`b6f0bed`](https://github.com/HaydenMCD/jog-journal/commit/b6f0bed73c2ae8ef4242dcc56d0cb4d2e1e9a39a) 10 July 2025 Anthony Legg - #8 install `tanstack router packages`

- [`b9afe97`](https://github.com/HaydenMCD/jog-journal/commit/b9afe97072b863ea3aa0bfcfa9aca9d41ea49987) 10 July 2025 Anthony Legg - build: add `.nvmrc` file for node version

remove `*rc` from prettier script in `package.json`

- [`8c6f330`](https://github.com/HaydenMCD/jog-journal/commit/8c6f330a417335a9faede62d02ea3509052160a9) 10 July 2025 Anthony Legg - #8 revert: remove `react-router` deps and config

- [`8a7b926`](https://github.com/HaydenMCD/jog-journal/commit/8a7b9262a73ced5f70a10629d3cf2aaa16d1fcc7) 10 July 2025 Anthony Legg - Revert "#8 reconfigure vite.config.js"

This reverts commit 03545930215547746d4756219a91c777ff633c99.

- [`f22c4cb`](https://github.com/HaydenMCD/jog-journal/commit/f22c4cb4d455e5a058d5e00ae706d4852546baa9) 10 July 2025 Anthony Legg - Revert "#8 create react-router required files"

This reverts commit d91a0858bbc54cdeedb6c86f829f74817b7117b1.

Signed-off-by: Anthony Legg &lt;anthony.legg@outlook.com&gt;

- [`f447f27`](https://github.com/HaydenMCD/jog-journal/commit/f447f27680f47fbb6dfcdd8b39d7c61a31f3c69d) 9 July 2025 Anthony Legg - #8 fix: remove .react-router/ from tracked files

- [`53d3702`](https://github.com/HaydenMCD/jog-journal/commit/53d37021044d4875ab9f4abafb37e8f6abbca665) 9 July 2025 Anthony Legg - #8 add generated react-router types

- [`d91a085`](https://github.com/HaydenMCD/jog-journal/commit/d91a0858bbc54cdeedb6c86f829f74817b7117b1) 9 July 2025 Anthony Legg - #8 create react-router required files

- [`0354593`](https://github.com/HaydenMCD/jog-journal/commit/03545930215547746d4756219a91c777ff633c99) 9 July 2025 Anthony Legg - #8 reconfigure vite.config.js

create react-router.config.js, remove default index.html file, is replaced in the next commit

- [`f67e716`](https://github.com/HaydenMCD/jog-journal/commit/f67e7169c6c1fcf2a88aa1759a2ccebc73376e4d) 9 July 2025 Anthony Legg - #8 revert: remove previous node packages

- [`2e2642d`](https://github.com/HaydenMCD/jog-journal/commit/2e2642d6090eb2b35ffadbce5f48a172bfdcac5a) 9 July 2025 Anthony Legg - fix: changelog script not functioning

testing fixes

- [`a5f89a5`](https://github.com/HaydenMCD/jog-journal/commit/a5f89a5301c4547c930cb16fedf3c56dbb3933e5) 9 July 2025 Anthony Legg - #8 install vite related react-router

packages. add plugin to vite.config.js

- [`940ee4c`](https://github.com/HaydenMCD/jog-journal/commit/940ee4c941028866253f41c780d7097b8e4b6647) 8 July 2025 Anthony Legg - #8 alter home page so no user data is displayed

- [`b3ede73`](https://github.com/HaydenMCD/jog-journal/commit/b3ede734a04aaa35846b5b08e8b91d2db2f278a8) 8 July 2025 Anthony Legg - #8 create auth related pages

added to a silent `(auth)` sub-directory

(auth) will not be part of the route used

- [`6332b7c`](https://github.com/HaydenMCD/jog-journal/commit/6332b7ccd702481f7a02838b2ec40e6a42cc9d6b) 8 July 2025 Anthony Legg - add typings to `vite.config.js`

- [`4efdf0a`](https://github.com/HaydenMCD/jog-journal/commit/4efdf0a1940ced126e067f3977813c0468dd35fa) 8 July 2025 Anthony Legg - #8 reorder `src` directory; add `app` directory

move files to app directory, update path in `index.html` in the root directory

- [`f252fde`](https://github.com/HaydenMCD/jog-journal/commit/f252fde4cda763c09efb4a53df91466f8d685b13) 8 July 2025 Anthony Legg - fix: rename example env

add app name variable

- [`4684db2`](https://github.com/HaydenMCD/jog-journal/commit/4684db27420fa64a7864166bc5fb242409c38567) 8 July 2025 Anthony Legg - #8 install react-router dependency

- [`1cea097`](https://github.com/HaydenMCD/jog-journal/commit/1cea097f1424a9554051055fc2a4df913e0c0553) 2 July 2025 Anthony Legg - Merge PR #51 from 11-bug-cannot-type-in-kilometer-input

## Completed

1. created constants for increment/decrement steps and for decimal place numbers
2. prevented users getting to negative number values #18 
3. converted the text input back to a number input
- added additional css to the body tag in `app.css` to prevent the default number input displaying increment/decrement buttons.

## Additional fix

1. updated husky pre-commit hook by removing the `&& git add .` so that files not meant to be committed are not added automatically.

- [`2cd61a2`](https://github.com/HaydenMCD/jog-journal/commit/2cd61a25962a0ed8fbcda4237b3cbe77ee30b4c3) 28 June 2025 Anthony Legg - #33 update changelog template

put output on single lines

- [`6b31536`](https://github.com/HaydenMCD/jog-journal/commit/6b31536904a43755555f99370dbe44af429282c8) 28 June 2025 Anthony Legg - #33 bug: fix husky commit scripts

update new post-commit so that it only handles changelog

- [`052fa29`](https://github.com/HaydenMCD/jog-journal/commit/052fa29d0ed5643fc4182d569c5013ca62396c7f) 28 June 2025 Anthony Legg - #33 bug: fix husky commit scripts

add new post-commit

- [`1a4b6f8`](https://github.com/HaydenMCD/jog-journal/commit/1a4b6f8a57d3863571cee71c159366ee7d15ad6a) 28 June 2025 Anthony Legg - #33 create changelog template

add log script to `package.json`

- [`0b9aa4e`](https://github.com/HaydenMCD/jog-journal/commit/0b9aa4e07a09f47cd7aa91c7603c5f74df6ac9b9) 28 June 2025 Anthony Legg - #33 update husky pre-commit hook

add `git add changelog.md` command

- [`0b92dba`](https://github.com/HaydenMCD/jog-journal/commit/0b92dba28272ae5b2703e51f7f00dc3f724172f9) 28 June 2025 Anthony Legg - #33 undo: remove cz-conventional-changelog dev dep

- [`49ee4ed`](https://github.com/HaydenMCD/jog-journal/commit/49ee4ed8242011617277e58d747a576e475126c8) 28 June 2025 Anthony Legg - #33 install auto changelog dev deps

- [`de3a1e0`](https://github.com/HaydenMCD/jog-journal/commit/de3a1e08082c01a159b15c1456e25e23472d387d) 27 June 2025 Anthony Legg - #11 update `kilometerinput.jsx` and constants.js

create constant for increment/decrement steps

- [`5064d21`](https://github.com/HaydenMCD/jog-journal/commit/5064d21951692a411797e209b6e4e9e93bad3231) 27 June 2025 Anthony Legg - #11 update `kilometerinput.jsx` so that it can be written to by

keyboard input and does not go into negative digits. Added two decimal places that can be added to by keyboard input

- [`95cdec5`](https://github.com/HaydenMCD/jog-journal/commit/95cdec58b9fd542632d4fffe50d12a4f494a2f8e) 27 June 2025 Anthony Legg - #11 update app.css to prevent number input having inbuilt increment/decrement buttons

- [`dd4f9bf`](https://github.com/HaydenMCD/jog-journal/commit/dd4f9bf945bcfbcafbec152615b604895a8b5966) 27 June 2025 Anthony Legg - #11 create fixed decimal point constant to use globally

- [`c6b8ed8`](https://github.com/HaydenMCD/jog-journal/commit/c6b8ed8654e44ef5d042472e8ed3f6aaa003b19a) 25 June 2025 Anthony Legg - Merge PR #49 from 39-install-and-configure-lint-staged-package

39 Install and configure lint staged package

## Completed

1. installed and configured [lint-staged](https://github.com/lint-staged/lint-staged) package
2. installed and configured [husky](https://typicode.github.io/husky/get-started.html) commit hooks package
- configured pre-commit script to run lint-staged & prettier
3. added `lint-staged` and `husky` specific config in `package.json`
- removed `browser-list` object left in from the non-vite app

- [`c1a2382`](https://github.com/HaydenMCD/jog-journal/commit/c1a2382f1f6de40297e66555bdc88c94f42d08f5) 25 June 2025 Anthony Legg - #39 add additional file formats to `lint-staged`

- [`bf4c330`](https://github.com/HaydenMCD/jog-journal/commit/bf4c330fe1273f7afdc147fafbd147f5f384910f) 25 June 2025 Anthony Legg - #39 add css to lint-staged handlers

- [`2170fae`](https://github.com/HaydenMCD/jog-journal/commit/2170fae92cff5ce941aece64bf3735d2e0ab5ee4) 24 June 2025 Anthony Legg - #39 add `git add .` after lint-staged

- [`b721956`](https://github.com/HaydenMCD/jog-journal/commit/b7219560f8317e0bc78aa39d4424910ff10f7d07) 24 June 2025 Anthony Legg - #39 add package.json config for husky and lint-staged

removed browser list object left in from the original react app config

- [`df52ed3`](https://github.com/HaydenMCD/jog-journal/commit/df52ed35b32b9750667ec425d30c84faee8e49d1) 24 June 2025 Anthony Legg - #39 init husky hooks package

add lint-staged script to pre-commit hook

- [`ffaa2eb`](https://github.com/HaydenMCD/jog-journal/commit/ffaa2eb2cb76f2fb6668d73005d6635f608b5bdc) 24 June 2025 Anthony Legg - #39 install husky commit hooks package

- [`575ffe0`](https://github.com/HaydenMCD/jog-journal/commit/575ffe0ca6213484c08682ee31ff330a5feb0293) 24 June 2025 Anthony Legg - #39 install `lint-staged` package

- [`af5d787`](https://github.com/HaydenMCD/jog-journal/commit/af5d787fabe25017bd1884c8d0572b2dff525ade) 21 June 2025 Anthony Legg - #28 refactor `kilometerinput.css` to use tailwind

- [`89c329c`](https://github.com/HaydenMCD/jog-journal/commit/89c329cf6e1a802bdb4bac8673b3ba76c1c68f61) 21 June 2025 Anthony Legg - #28 move button css to `app.css`

button style is globally available + be overwritten as needed

- [`be7e6e3`](https://github.com/HaydenMCD/jog-journal/commit/be7e6e328f003c6a760030e953a975756e0d3a8d) 21 June 2025 Anthony Legg - #28 `constants.css` rename input border

- [`1eb1912`](https://github.com/HaydenMCD/jog-journal/commit/1eb191296b13d07b6bf6662bed32fe4010424982) 21 June 2025 Anthony Legg - #28 `auth.css` replace classes with tailwind

kept original css for reference

- [`39098b6`](https://github.com/HaydenMCD/jog-journal/commit/39098b6feb96e616ae241deb2ef4a50b410d92e5) 21 June 2025 Anthony Legg - #28 remove text colour declaration from `header.css`

set dark/light mode background

- [`b9fa959`](https://github.com/HaydenMCD/jog-journal/commit/b9fa9591b1c8032f34c3d0abae226cd619d676f5) 21 June 2025 Anthony Legg - #28 set dark/light mode tailwind classes in `app.css` body tag

setting default colours here means font colours dont need to be re-declared elsewhere unless they need to be different

- [`0cc8057`](https://github.com/HaydenMCD/jog-journal/commit/0cc80574c68603c9fbd1fbb1ba04e70692d29980) 21 June 2025 Anthony Legg - #28 set dark/light mode colors in `constants.css`

- [`d35e18f`](https://github.com/HaydenMCD/jog-journal/commit/d35e18ff50b8e15135fa09bbd7626e6e0dfbfc63) 21 June 2025 Anthony Legg - #28 apply tailwind custom colour to body background

- [`a96354a`](https://github.com/HaydenMCD/jog-journal/commit/a96354af41b21832d476e0006fad05e366bf88ee) 21 June 2025 Anthony Legg - #28 reorder `@theme` and `:root` declarations

apply values directly in `@theme` instead of referencing `:root` variables

- [`44b0c92`](https://github.com/HaydenMCD/jog-journal/commit/44b0c92889a9994f208e25ca90da437962ac1dbc) 20 June 2025 Anthony Legg - build: add package security patch

- [`7db9524`](https://github.com/HaydenMCD/jog-journal/commit/7db952451d78a765c58f165c7eefecd091517b65) 20 June 2025 Anthony Legg - #28 update auth components to use auth.css

- [`27abe2b`](https://github.com/HaydenMCD/jog-journal/commit/27abe2b0e785eaa2c69d32acddb7101ae921d913) 20 June 2025 Anthony Legg - #28 delete login signup css files

remove duplicate classes

- [`ca7fb6e`](https://github.com/HaydenMCD/jog-journal/commit/ca7fb6e5d4d9151ef933693317cf91160bf967bf) 20 June 2025 Anthony Legg - #28 update kilometerinput.css import order

- [`220e0fa`](https://github.com/HaydenMCD/jog-journal/commit/220e0fa26726e401664fa48dbe5302be3f31d61d) 20 June 2025 Anthony Legg - #28 update auth.css import order

- [`5d82ee1`](https://github.com/HaydenMCD/jog-journal/commit/5d82ee112d322dec160bb140fcb1a36d2864005e) 20 June 2025 Anthony Legg - #28 update .css import order

- [`7a39c8b`](https://github.com/HaydenMCD/jog-journal/commit/7a39c8b86ca543e9b79306ff343e1fdb7b377ab3) 20 June 2025 Anthony Legg - #28 update app.css to use tailwind

remove font declarations

- [`c871a24`](https://github.com/HaydenMCD/jog-journal/commit/c871a246abc09d4a7c3cd70fb0c2f0d19b5d2a4d) 20 June 2025 Anthony Legg - #28 update statsview.css to use tailwind

format file

- [`20760ca`](https://github.com/HaydenMCD/jog-journal/commit/20760ca80503bc23855210f0797160245784c0f5) 20 June 2025 Anthony Legg - #28 update statsview.css to use tailwind

add relative units instead of pixels

- [`600bc0f`](https://github.com/HaydenMCD/jog-journal/commit/600bc0f216c263c40a08c0d43d9fd668b1b3ccec) 20 June 2025 Anthony Legg - #28 tracker.css update wrapper with tailwind classes

- [`d33e172`](https://github.com/HaydenMCD/jog-journal/commit/d33e172774255c56adbe7d1904c595a44a9c51c1) 20 June 2025 Anthony Legg - #28 replace kilometer container will tailwind classes

- [`7703163`](https://github.com/HaydenMCD/jog-journal/commit/7703163dc2a2bc0f534c816520556b51b21716fd) 20 June 2025 Anthony Legg - #28 update kilometerinput.css to use relative units

- [`98e3044`](https://github.com/HaydenMCD/jog-journal/commit/98e30448d1ef38fa5341b461f1570fd7d50591aa) 20 June 2025 Anthony Legg - #28 import tailwind into auth.css

combine login and signup css files into a single file to remove duplication

- [`386ea96`](https://github.com/HaydenMCD/jog-journal/commit/386ea965b854622dcdad38a446f5f4db5a769877) 20 June 2025 Anthony Legg - #28 import tailwind to kilometerinput.css file

- [`13d4951`](https://github.com/HaydenMCD/jog-journal/commit/13d4951eb011c464b3aa689a3328149fa85ea5cf) 20 June 2025 Anthony Legg - #28 import tailwind to statsview.css file

- [`1d3fc79`](https://github.com/HaydenMCD/jog-journal/commit/1d3fc79abdd5f848c4848c822c9ed2f73c8dda59) 20 June 2025 Anthony Legg - #28 import tailwind to tracker css file

- [`6a84e36`](https://github.com/HaydenMCD/jog-journal/commit/6a84e36041f6e83fb5c621e1ca7807a53bf99c8b) 20 June 2025 Anthony Legg - #28 kilometer input css

convert px to relative unit size

- [`0c7dfef`](https://github.com/HaydenMCD/jog-journal/commit/0c7dfef446875cc64c4ad77ecaa98907c57f3bdc) 20 June 2025 Anthony Legg - #28 header.css convert font unit

switched to relative font size to allow adjustment of font size depending on browser/device settings. used `https://cssunitconvert.com/convert/px-to-ch` to calculate conversion

- [`9946c8f`](https://github.com/HaydenMCD/jog-journal/commit/9946c8f7f48f17fb370096445427330e5c94d833) 11 June 2025 Anthony Legg - #28 bug fix progress bar `var()` line 13

- [`3e65ff6`](https://github.com/HaydenMCD/jog-journal/commit/3e65ff679c33141a7a977c08c295acf9386ee3bd) 11 June 2025 Anthony Legg - #28 tailwind css and :root

variables combined. Header component adapted to use tailwind css classes

- [`16471c6`](https://github.com/HaydenMCD/jog-journal/commit/16471c6bf4240fe10fd5f480a02e3cee77d6b0d6) 9 June 2025 Anthony Legg - #28 update .prettierrc to use tailwind

class sorting package

- [`f2a7962`](https://github.com/HaydenMCD/jog-journal/commit/f2a7962287bc0e7fa3a191e36618e42683bddaad) 9 June 2025 Anthony Legg - #28 install prettier tailwind class sort package

- [`7acf41d`](https://github.com/HaydenMCD/jog-journal/commit/7acf41d068f302eee51791a8d6b63a0530688e0f) 9 June 2025 Anthony Legg - #28 add tailwindcss plugins

to `app.css`

- [`8b5aabc`](https://github.com/HaydenMCD/jog-journal/commit/8b5aabcb58aeb4097bb06dea454565e9a9f43768) 9 June 2025 Anthony Legg - #28 install tailwind dev dependencies

forms and typography

- [`1fae14f`](https://github.com/HaydenMCD/jog-journal/commit/1fae14f4175b161f2a5f70551066220a944c1f1e) 9 June 2025 Anthony Legg - #28 init tailwindcss v4 using vite

install guide

- [`5be406d`](https://github.com/HaydenMCD/jog-journal/commit/5be406dd65efe57307fb8541d3504641220504ee) 8 June 2025 Anthony Legg - #27 add fix to header.css

remove height from wrapper

- [`0ae1f5b`](https://github.com/HaydenMCD/jog-journal/commit/0ae1f5b5c696779d5c5f624fef7c54e91a3d245c) 8 June 2025 Anthony Legg - #27 remove index.css from src/

combine contents with /src/css/app.css

- [`f310072`](https://github.com/HaydenMCD/jog-journal/commit/f310072a34192a1249ec8bfb9084669cc9feef85) 8 June 2025 Anthony Legg - #27 upddate statsview.css to use :root variables

- [`819144e`](https://github.com/HaydenMCD/jog-journal/commit/819144ee5f11851052886126c033983a8476ac20) 8 June 2025 Anthony Legg - #27 upddate signup.css to use :root variables

- [`8e321c5`](https://github.com/HaydenMCD/jog-journal/commit/8e321c502e1e16d5749c5cdb165cc9e505e600fa) 8 June 2025 Anthony Legg - #27 upddate login.css to use :root variables

- [`a357f94`](https://github.com/HaydenMCD/jog-journal/commit/a357f9447468a8585c352c3730ddfa7d65ad6660) 8 June 2025 Anthony Legg - #27 upddate kilometerinput.css to use variables

- [`3173a56`](https://github.com/HaydenMCD/jog-journal/commit/3173a56f2d6642e9d736910eb157b4b895b0602e) 8 June 2025 Anthony Legg - #27 add default font size to :root

update header.css to use variables, remove root font-size declarations

- [`b5f6418`](https://github.com/HaydenMCD/jog-journal/commit/b5f641858be9ca8b9c1477f8d6205091dd2d3a16) 8 June 2025 Anthony Legg - #27 import constants.css in App.css

replace colour hex with css variable

- [`bc0ea26`](https://github.com/HaydenMCD/jog-journal/commit/bc0ea26a6c7d228eeb8ff671edc3342b2697125f) 8 June 2025 Anthony Legg - #27 create constants css file

use apps currently used colours

- [`f948932`](https://github.com/HaydenMCD/jog-journal/commit/f948932d69c70d86e2345c10021193899f101444) 20 May 2025 Hayden - Removed signup from app.js

- [`71f9f67`](https://github.com/HaydenMCD/jog-journal/commit/71f9f674d47c89249c9fa2895c7a38a34d432d7f) 20 May 2025 Hayden - Chaned input class names to form-input. Changed all input's to self closing tags

- [`ce80320`](https://github.com/HaydenMCD/jog-journal/commit/ce8032098793a06e5d5f39e11bcdd56a974fe6d0) 18 May 2025 Hayden - Removed sign up page from app.js

- [`53ac8b2`](https://github.com/HaydenMCD/jog-journal/commit/53ac8b27d9ab17d1871643ba82c36988f7a5ed84) 18 May 2025 Hayden - Added name attribute to input fields. Matched class names to name.

- [`16142f2`](https://github.com/HaydenMCD/jog-journal/commit/16142f227ea639fbfbd729df63496d822a5cccd2) 14 May 2025 Hayden - Added input fields required for creating the users account. Added input fields for additional info that will be used later.

- [`2bf9f1d`](https://github.com/HaydenMCD/jog-journal/commit/2bf9f1ddeec370ecd5595f307a9f5d2d42b46fb3) 28 April 2025 Hayden - Added new database variables.

- [`6df0e6b`](https://github.com/HaydenMCD/jog-journal/commit/6df0e6bb418210b36ccd6f7c60417b1cbb37f86e) 28 April 2025 Hayden - Added .env to gitignore. Renamed env file to example file.

- [`5e0154e`](https://github.com/HaydenMCD/jog-journal/commit/5e0154eefe7572cea463255dd8792008f764daae) 28 April 2025 Hayden - Added placeholders for all statistics. Created a 2x4 grid for the statistics to be displayed in.

- [`383ab53`](https://github.com/HaydenMCD/jog-journal/commit/383ab537f801dc08e92f2953286eed5e9c69cd20) 28 April 2025 Hayden - Removed seperate components for stat view page. Created single file for all math to be done which will be accessed when/where needed. Added more statistics for future implementation

- [`502b13c`](https://github.com/HaydenMCD/jog-journal/commit/502b13c715506189dfeb72176cd809328475ce78) 28 April 2025 Hayden - Created a folder for all stat related components. I created components for each statistic that will be shown. More will be added in the future.

- [`04b8827`](https://github.com/HaydenMCD/jog-journal/commit/04b882724b08ee12e25ba9347caa726d68904f6c) 28 April 2025 Hayden - Deleted env file.

- [`f7dbacc`](https://github.com/HaydenMCD/jog-journal/commit/f7dbacc988c92ce6d3f59ee77f26d33ce91fe172) 28 April 2025 Hayden - Added env file to ignore, added example file again. New database has been created with new key.

- [`d684f6a`](https://github.com/HaydenMCD/jog-journal/commit/d684f6a98dadb0bbb68da71f12a88092893763c6) 28 April 2025 Hayden - Added a placeholder for where the round progress bar will eventually go. Renamed the Tracker component/page to StatsView as this is a more accurate name.

- [`79689e0`](https://github.com/HaydenMCD/jog-journal/commit/79689e0db7e2e6e17def08476355f0ec52a401ec) 13 January 2025 Hayden - Added envexample file. Added error handling on addDoc function. Added quick fix for negatve kilometers being submitted. Added inline comments

- [`ac3704c`](https://github.com/HaydenMCD/jog-journal/commit/ac3704c53e7477d101b57d5695a53c870d5cb5fa) 13 January 2025 Hayden - Added addDoc function when form submitted. Created a collection with called {year} runs (if not already there). Then adds the kilometers entered and timestamp.

- [`c94fb04`](https://github.com/HaydenMCD/jog-journal/commit/c94fb047ebe76d9f98e0a0a0e9bc05aedbb34a13) 13 January 2025 Hayden - Added initialisation file for firebase.

- [`5d4ed7c`](https://github.com/HaydenMCD/jog-journal/commit/5d4ed7cdf7a8f40b3f215f89de11ebf7fe44c290) 13 January 2025 Hayden - Installed firebase. Updated gitignore

- [`36757c8`](https://github.com/HaydenMCD/jog-journal/commit/36757c857e8d3cf5c29b18dbf0e98ac701f0ab09) 13 January 2025 Hayden - Set enter kilometer view min width. Added statistics view with basic info (more will be added once a database is linked).

- [`29b88a5`](https://github.com/HaydenMCD/jog-journal/commit/29b88a5040ba0b054f4d4700199ebb34fa64a3d2) 10 January 2025 Hayden - Added submit button. Wrapped the input in a form. Added basic css. Added title for kilometer input section

- [`7a337ac`](https://github.com/HaydenMCD/jog-journal/commit/7a337ace9993c5e7c3ad6afbbef4718a63cfa4b0) 10 January 2025 Hayden - Added an input for the kms ran. Added an increase and decrease button on either side of the input

- [`83f9de3`](https://github.com/HaydenMCD/jog-journal/commit/83f9de30076e5ca7b697bfad40c292d68108358d) 7 January 2025 Hayden - Added calulation for current day in the year and remaining days left in the year.

- [`c030a78`](https://github.com/HaydenMCD/jog-journal/commit/c030a787e2c1ba7369d929beba42350eb44126c6) 4 January 2025 Hayden - Created header component. Moved title and slogan to the header component. Added simple css to the header.

- [`5668eef`](https://github.com/HaydenMCD/jog-journal/commit/5668eeff660b08ce8e2f00923b0e4432c4f48499) 4 January 2025 Hayden McDowall - Update README.md

- [`5cf3ba8`](https://github.com/HaydenMCD/jog-journal/commit/5cf3ba8bd3763f440fc1b3425b633fb0678de861) 4 January 2025 Hayden - Changed file structure

- [`94ea985`](https://github.com/HaydenMCD/jog-journal/commit/94ea98563183fa25567271d0a2d8a8949ff55d96) 4 January 2025 Hayden - initial commit. Created project and removed default content. Added header and slogan.

---