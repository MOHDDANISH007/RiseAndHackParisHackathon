import mongoose from 'mongoose'

const conversationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

const Conversation =
  mongoose.models.Conversation ||
  mongoose.model('Conversation', conversationSchema)

export default Conversation
