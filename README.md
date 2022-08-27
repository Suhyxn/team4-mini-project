
```
team4-mini-project
├─ .eslintrc
├─ .git
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ ORIG_HEAD
│  ├─ config
│  ├─ description
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 48
│  │  │  └─ 04c37c2265e777f50792c8593006a9b8eee20a
│  │  ├─ 49
│  │  │  └─ eaa283b38b95b34b21dfa05fb26198cb04d1a6
│  │  ├─ 4f
│  │  │  └─ 626abc8369583d9e377369296d77147f62f802
│  │  ├─ 57
│  │  │  └─ 9a1fc05548cbdf34f2d51c0fd3526aeba1b572
│  │  ├─ 61
│  │  │  └─ 707a0ad3aae6583ed0af853b75bec2ad8b407b
│  │  ├─ 71
│  │  │  └─ b8017ec7966fe3635ca7c1a9a41bdee6b97da3
│  │  ├─ b9
│  │  │  └─ 964eeae8598dd50c24aa2871a894c55aa36d5f
│  │  ├─ d0
│  │  │  └─ 10a8d77507e4370bf39b9fa90adbc974776b9f
│  │  ├─ da
│  │  │  └─ 3c833124922291ab9057610bdef8686a4aee41
│  │  ├─ ef
│  │  │  └─ 6b6fdb76c77821356b9ce34913b6466beed2fc
│  │  ├─ fb
│  │  │  └─ b8c8e263a34be346bf60d7688683c0ef46f56d
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-88897fa2dd204d3747c7d20628e1b2ac23315853.idx
│  │     └─ pack-88897fa2dd204d3747c7d20628e1b2ac23315853.pack
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     ├─ HEAD
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ .prettierrc
├─ .vscode
│  └─ settings.json
├─ README.md
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ assets
│  │  └─ fonts
│  │     ├─ GmarketSansTTFBold.ttf
│  │     ├─ GmarketSansTTFLight.ttf
│  │     └─ GmarketSansTTFMedium.ttf
│  └─ vite.svg
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ api
│  │  ├─ authApiSlice.js
│  │  ├─ cartApiSlice.js
│  │  ├─ favoriteApiSlice.js
│  │  ├─ orderApiSlice.js
│  │  ├─ productApiSlice.js
│  │  └─ userApiSlice.js
│  ├─ components
│  │  ├─ common
│  │  │  ├─ Button
│  │  │  │  ├─ index.jsx
│  │  │  │  └─ style.js
│  │  │  ├─ Card
│  │  │  │  ├─ index.jsx
│  │  │  │  └─ style.js
│  │  │  ├─ Filter
│  │  │  │  ├─ index.js
│  │  │  │  └─ index.jsx
│  │  │  ├─ Input
│  │  │  │  ├─ index.jsx
│  │  │  │  └─ style.js
│  │  │  ├─ Loan
│  │  │  │  ├─ index.jsx
│  │  │  │  └─ style.js
│  │  │  └─ Radio
│  │  │     ├─ index.jsx
│  │  │     └─ style.js
│  │  ├─ layout
│  │  │  ├─ Footer
│  │  │  │  ├─ index.jsx
│  │  │  │  └─ style.js
│  │  │  ├─ Header
│  │  │  │  ├─ index.jsx
│  │  │  │  └─ style.js
│  │  │  ├─ Loader
│  │  │  │  ├─ index.jsx
│  │  │  │  └─ style.js
│  │  │  ├─ Nav
│  │  │  │  ├─ index.jsx
│  │  │  │  └─ style.js
│  │  │  └─ NotFound
│  │  │     ├─ index.jsx
│  │  │     └─ style.js
│  │  └─ template
│  │     ├─ Additional
│  │     │  ├─ index.jsx
│  │     │  └─ style.js
│  │     ├─ Search
│  │     │  ├─ index.jsx
│  │     │  └─ style.js
│  │     └─ UserEdit
│  │        ├─ index.jsx
│  │        └─ style.js
│  ├─ index.css
│  ├─ main.jsx
│  ├─ routes
│  │  ├─ Cart
│  │  │  ├─ index.jsx
│  │  │  └─ style.js
│  │  ├─ Favorites
│  │  │  ├─ index.jsx
│  │  │  └─ style.js
│  │  ├─ Home
│  │  │  ├─ index.jsx
│  │  │  └─ style.js
│  │  ├─ Login
│  │  │  ├─ index.jsx
│  │  │  └─ style.js
│  │  ├─ MyPage
│  │  │  ├─ index.jsx
│  │  │  └─ style.js
│  │  ├─ Product
│  │  │  ├─ index.jsx
│  │  │  └─ style.js
│  │  ├─ ProductDetail
│  │  │  └─ Detail
│  │  │     ├─ index.jsx
│  │  │     └─ style.js
│  │  ├─ Recommended
│  │  │  ├─ index.jsx
│  │  │  └─ style.js
│  │  └─ SignUp
│  │     ├─ index.jsx
│  │     └─ style.js
│  ├─ store
│  │  └─ index.js
│  └─ style
│     ├─ ThemeProvider.jsx
│     ├─ global.js
│     ├─ media.js
│     └─ theme.js
└─ vite.config.js

```