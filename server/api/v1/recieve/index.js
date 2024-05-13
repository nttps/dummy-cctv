export default defineEventHandler(async (event) => {
    const req = await readBody(event);
    console.log(req);
});
