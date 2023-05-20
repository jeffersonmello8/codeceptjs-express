const { faker } = require('@faker-js/faker')

Feature('tasks')

Scenario.skip('deve poder cadastrar uma nova tarefa usando dados dinâmicos', ({ I }) => {

    const taskName = `Ouvir e traduzir a música ${faker.music.songName()}`

    I.amOnPage('/')

    I.fillField('input[placeholder$=Task]', taskName)
    I.click('Create')

    I.see(taskName, '.task-item')
})

Scenario('deve poder cadastrar uma nova tarefa usando dados fixos', ({ I }) => {

    const taskName = `Concluir o curso de JavaScript + React`

    I.deleteByHelper(taskName)

    I.createTask(taskName)
    
    I.see(taskName, '.task-item')
})

Scenario('não deve poder cadastrar tarefas com nome duplicados', ({ I }) => {

    const task = {
        "name": 'Terminar a escrita do novo artigo sobre qualidade',
        "is_done": false
    }

    const errorMsg = `Task already exists`

    I.deleteByHelper(task.name)

    I.postTask(task)

    I.createTask(task.name)

    I.see(errorMsg, '.swal2-html-container')
})
