import data from "../../../utils/data.js"
export default async function handler(req, res) {

    const { method } = req;
    console.log('method is ', method)
    if (method === 'GET') {
        //when we get products from api or database use try-catch
        try {
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}