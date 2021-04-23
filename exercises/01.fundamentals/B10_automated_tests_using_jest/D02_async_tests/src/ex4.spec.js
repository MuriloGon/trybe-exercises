const getRepos = require('./ex4');

describe('EX04 - testing fetch from api', () => {
  test('verify if the tryber has specifed repos on github', async () => {
    const url = 'https://api.github.com/orgs/tryber/repos';
    const repo1 = 'sd-01-week4-5-project-todo-list';
    const repo2 = 'sd-01-week4-5-project-meme-generator';
    const repo3 = 'sd-murilo';

    const reposList = await getRepos(url);

    expect(reposList).toContain(repo1);
    expect(reposList).toContain(repo2);
    expect(reposList).not.toContain(repo3);
  });
});
