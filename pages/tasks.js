const { I } = inject();

module.exports = {

  create: function(taskName) {
    I.amOnPage('/')

    I.fillField('input[placeholder$=Task]', taskName)
    I.click('Create')
  },

  haveText: function(taskName) {
    I.see(taskName, '.task-item')
  },

  havePopUpText: function (text){
    I.see(text, '.swal2-html-container')
  }
}
