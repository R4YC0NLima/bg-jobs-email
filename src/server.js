import 'dotenv/config'
import express from 'express'
import UserController from './app/controllers/UserController'
import BullBoard from "bull-board"
import Queue from './app/lib/Queue'

const app = express()
// BullBoard.setQueues(Queue.queues.map(queue => queue.bull))
// BullBoard.setQueues(Queue.queues.map(queue => queue.bull))

const PORT = 3333
app.use(express.json())
app.post('/users', UserController.store)
// app.use('/admin/queues', BullBoard.UI)

app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
})