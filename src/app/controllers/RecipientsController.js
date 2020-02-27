import Recpients from "../models/recipients";

class RecipientsController {
  async store(req, res) {
    const recipient = await Recpients.create(req.body);

    return res.json(recipient);
  }
}

export default new RecipientsController();
