import data from "../../../utils/data.js"
export default async function handler(req, res) {

    const { method, query: { id } } = req;
    //console.log('id is ', id)
    if (method === 'GET') {
        //when we get products from api or database use try-catch
        try {
            const card = data.filter(item => item.id == id)[0];
            //console.log(card)
            if (card == null) {
                res.status(200).json({ error: "Project not found. please enter right id no." })
            }
            else { res.status(200).json(card) }
        } catch (error) {
            res.status(500).json(error);
        }
    }
}