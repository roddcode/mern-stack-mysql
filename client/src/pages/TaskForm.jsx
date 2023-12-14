import {Formik, Form} from 'formik'
function TaskForm() {
  return (
    <div>
      <Formik>
        <Form>
          <label>title</label>
          <input type="text" name ='title' placeholder='Write a title'/>
          <labeL>description</labeL>
          <textarea name="description" placeholder='Write a description'  rows="3"></textarea>

          <button>
            Save
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default TaskForm
