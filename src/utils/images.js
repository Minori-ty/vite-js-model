export async function fn() {
    console.log(import('images/logo.png'))
    return await import('images/logo.png')
}
