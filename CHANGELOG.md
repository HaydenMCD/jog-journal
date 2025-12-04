# Runner App Changelog :calendar:

## Merged :heavy_check_mark:

- [`#57`](https://github.com/HaydenMCD/jog-journal/pull/57) Anthony Legg - Sprint 2

- [`#46`](https://github.com/HaydenMCD/jog-journal/pull/46) Anthony Legg - Sprint 1

- [`#43`](https://github.com/HaydenMCD/jog-journal/pull/43) Hayden McDowall - Revert "#26 create sign up screen merge to Development"

- [`#37`](https://github.com/HaydenMCD/jog-journal/pull/37) Hayden McDowall - #26 create sign up screen merge to Development

- [`#24`](https://github.com/HaydenMCD/jog-journal/pull/24) Hayden McDowall - 3 link to firebase database merge into Development

- [`#23`](https://github.com/HaydenMCD/jog-journal/pull/23) Hayden McDowall - 15 create statistics view merge into Development

- [`#20`](https://github.com/HaydenMCD/jog-journal/pull/20) Hayden McDowall - Merge 15-create-statistics-view to main

- [`#14`](https://github.com/HaydenMCD/jog-journal/pull/14) Hayden McDowall - Kilometer input section merge into main







## Commits :heavy_check_mark:

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