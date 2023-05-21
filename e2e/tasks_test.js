const { faker } = require('@faker-js/faker')

Feature('tasks')

Scenario.skip('deve poder cadastrar uma nova tarefa usando dados dinâmicos', ({ tasksPage }) => {

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
}).tag('critical')

// const manyTasks = new DataTable(['name'])

// manyTasks.add(['Comprar banana e aveia'])
// manyTasks.add(['Pagar a academia'])
// manyTasks.add(['Varrer a casa'])
// manyTasks.add(['Limpar a piscina'])
// manyTasks.add(['Colocar a ração dos gatos'])
// manyTasks.add(['Ouvir um podcast em inglês'])


// Data(manyTasks).Scenario('deve poder cadastrar tarefas usando a função DataTable do CodeceptJS', ({ I, tasksPage, current }) => {

//     const taskName = current.name

//     I.deleteByHelper(taskName)

//     tasksPage.create(taskName)
//     tasksPage.haveText(taskName)
// })
