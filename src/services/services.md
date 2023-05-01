# DB Structure

Object called `CompanyData` stored in localStorage

```
companyData: {
  "companyName": {
    keys: number,
    lBucks: number,
    lootBoxes: number,
    unlockedCharacters: string[],
    users: {
      "username": {
        username: string,
        password: string,
      },
    },
  },
}
```

`companyData` is an object that contains multiple companies identified using a string value that represents the company name.

Each `company` contains data for `keys`, `lBucks`, `lootBoxes`, `unlockedCharacters`, and `users`.

`keys`, `lBucks`, and `lootBoxes` are numeric values that represent the corresponding number of the respective item that the company owns.

`users` is a list of registered users that belong to the company. Each entry contains a `username` and a hashed `password`.

`unlockedCharacters` is an array of strings that represents the characters that the company has access to.

# Data Management

## API

The `api` directory contains packages for several endpoints. The `companyApi` handles storing and accessing the `companyData` object into localStorage, so all api's that access localStorage data depend on the `companyApi`.

## Slices

The `slices` directory is a collection of redux actions/reducers that are built using redux toolkit's `createSlice`. The slices are responsible for managing application state only.

## Hooks

The `hooks` directory contains hooks that act as a bridge between corresponding api's and slices. Each of these managing hooks is responsible for serving abstracted functions to the application that manage redux state in tandem with the localStorage data. Each hook also contains an `error` variable in state which handles any errors that are thrown from api's or alices.
