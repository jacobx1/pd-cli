export const formatAppleScriptProperties = (props: object) =>
  `{${Object.keys(props)
    .filter(key => !!props[key])
    .map(key => `${key}:"${props[key]}"`)
    .join(', ')}}`;
