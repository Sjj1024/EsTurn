import JSEncrypt from 'jsencrypt'

export const publickKey = import.meta.env.VITE_PUBLIC_KEY || ''
export const privateKey = import.meta.env.VITE_PRIVATE_KEY || ''

export const rsaEncode = (content: string) => {
    var encrypt = new JSEncrypt()
    encrypt.setPublicKey(publickKey)
    return encrypt.encrypt(content) as string
}

export const rsaDecode = (content: string) => {
    const decrypt = new JSEncrypt()
    decrypt.setPrivateKey(privateKey)
    return decrypt.decrypt(content) as string
}
