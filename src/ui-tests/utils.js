// export const getSuppliedPropsFromSamples = (samples) => samples
//     .flatMap(sample => getSuppliedPropsFromSample(sample))
//     .filter((val, ix, arr) => arr.indexOf(val) === ix)

export const getSuppliedPropsFromSample = (sample) => Object.keys(sample).filter(key => !key.startsWith("$$"))

export const getExpectedPropsFromTemplate = (template) => Array.from(template.matchAll(/(?<=\$ctrl\.)(\w+)/g))
    .map(x => x[1])
    .filter((val, ix, arr) => arr.indexOf(val) === ix)

export const getUnusedProps = (expectedProps, suppliedProps) => suppliedProps.filter(prop => expectedProps.indexOf(prop) === -1)

export const getMissingProps = (expectedProps, suppliedProps) => expectedProps.filter(prop => suppliedProps.indexOf(prop) === -1)
