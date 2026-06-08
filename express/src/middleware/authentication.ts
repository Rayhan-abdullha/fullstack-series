// function authenticationMiddleware(req: Request, res: Response, next: NextFunction) {
//   const authHeader = req.headers.authorization;

//   if (!authHeader) {
//     return res.status(401).json({ error: 'Authorization header is missing' });
//   }

//   // Here you would typically verify the token (e.g., using JWT)
//   // For now, we'll just call next() to proceed
//   next();
// }
