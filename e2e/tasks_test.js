const { faker } = require('@faker-js/faker')

Feature('tasks')

Scenario('deve poder cadastrar uma nova tarefa usando dados dinâmicos', ({ tasksPage }) => {

    const taskName = `Ouvir e traduzir a música ${faker.music.songName()}`

    tasksPage.create(taskName)
    tasksPage.haveText(taskName)
})

Scenario('deve poder cadastrar uma nova tarefa usando dados fixos', ({ I, tasksPage }) => {

    const taskName = `Concluir o curso de JavaScript + React`

    I.deleteByHelper(taskName)

    tasksPage.create(taskName)
    tasksPage.haveText(taskName)
})

Scenario('não deve poder cadastrar tarefas com nome duplicados', ({ I, tasksPage }) => {

    const task = {
        "name": 'Terminar a escrita do novo artigo sobre qualidade',
        "is_done": false
    }

    const errorMsg = `Task already exists`

    I.deleteByHelper(task.name)

    I.postTask(task)

    tasksPage.create(task.name)
    tasksPage.havePopUpText(errorMsg)
})
