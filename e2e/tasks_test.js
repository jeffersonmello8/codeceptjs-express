const { faker } = require('@faker-js/faker')

Feature('tasks')

Scenario.skip('deve poder cadastrar uma nova tarefa usando dados dinâmicos', ({ I }) => {

    const taskName = `Ouvir e traduzir a música ${faker.music.songName()}`

    I.amOnPage('/')

    I.fillField('input[placeholder$=Task]', taskName)
    I.click('Create')

    I.see(taskName, '.task-item')
})

Scenario.only('deve poder cadastrar uma nova tarefa usando dados fixos', ({ I }) => {

    const taskName = `Concluir o curso de JavaScript + React`

    I.sendDeleteRequest(`http://localhost:3333/helper/tasks/${taskName}`)
    I.seeResponseCodeIsSuccessful()

    I.amOnPage('/')

    I.fillField('input[placeholder$=Task]', taskName)
    I.click('Create')

    I.see(taskName, '.task-item')
})
