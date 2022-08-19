import {v4 as uuid} from 'uuid'

export const generate_random_value = (len: number) => {
    let random = uuid().slice(0, len).replace('-', '')
    console.log(random)
    return(random)
}