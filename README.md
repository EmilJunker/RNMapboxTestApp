# Getting Started

## Steps to reproduce the error

Specify a secret Mapbox download token via `gradle.properties`

```ts
MAPBOX_DOWNLOADS_TOKEN=sk....
```

Set a public access token in `App.tsx`

```ts
Mapbox.setAccessToken('pk....');
```

Install dependencies

```sh
npm install
```

Run the app

```sh
npm start
npm run android
```

When prompted, give the app permission to access your location

### Observe the following problems:

- The `onLocationUpdate` callback only gets called once and is never updated when the location changes
- The location pin on the map also doesn't update when the location changes
- The following error message appears in the console:

```
Mapbox [error] ViewTagResolver | view: null found with tag: 428 but it's either null or not the correct type
```

## Steps to run the app without the error

1. Set `newArchEnabled=false` in `android\gradle.properties`
2. Then follow the same instructions as above
3. Observe that the error does not occur and everything works normally
