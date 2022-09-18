// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const body = req.body;
  if (body) {

    res.status(200).json({ message: 'Thanks for your submit I will contact you very soon.' })
  }
}
