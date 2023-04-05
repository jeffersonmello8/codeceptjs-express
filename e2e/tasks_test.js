const { faker } = require('@faker-js/faker')

Feature('tasks')

Scenario.only('deve poder cadastrar uma nova tarefa', ({ I }) => {

    const taskName = `Ouvir e traduzir a música ${faker.music.songName()}`

    I.amOnPage('/')

    I.fillField('input[placeholder$=Task]', taskName)
    I.click('Create')

    I.see(taskName, '.task-item')
})
