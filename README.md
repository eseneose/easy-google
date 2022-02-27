## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Notes

This project is to demostrate the power of tailwind css and how it can be used to reduce your css code as well as make them more effective

When user search a term, an api call is made to google customsearch api which returns the search result for the term.

the results are displayed  by mappin each to a div and a p element containing the required data from the results.

to use this app, create a dev.js file in the config folder and place in your own Googke customsearch api_key ( https://developers.google.com/custom-search/v1/using_rest) and context_key(https://cse.google.com/cse/create/new).

see a live demo of this app here https://easy-google.vercel.app/

as at the time of this deployment, my api_key has not been verified and will not work properly as i am currently unable to setup a GCP billing account

To use this app at its fullest, clone the repository, fix in your api_key and run.