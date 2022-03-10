// @Note Temporary API route for simulating the api response
import menuData from "../../constants/menu.json"

export default function handler(req,res) {
    res.status(200).json(menuData);
}