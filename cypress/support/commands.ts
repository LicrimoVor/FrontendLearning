import './commands/login';
import './commands/getByTestId';
import './commands/profile';
import './commands/article';
import './commands/comments';
import './commands/rating';

export {};

// Cypress.Commands.overwrite('intercept', (req) => {
//     const { FIXTURE_MODE } = process.env;
//     const fixtureName = req.METHOD + req.url + Hash(req.body);

//     if (FIXTURE_MODE === 'READ') {
//         readFixture(fixtureName);
//     }
//     if (FIXTURE_MODE === 'WRITE') {
//         createFixture(fixtureName, req.body);
//     }
//     if (FIXTURE_MODE === 'API') {

//     }
// });
