import {ADD_DECK,ADD_CARD_TO_DECK,RECEIVE_DECKS} from '../actions'

const deck=(state={},action)=>{
    switch(action.type){
        case ADD_DECK:
            const newDeck={
                [action.deck]:{
                    title:action.deck,
                    question:[]
                }
            }
            return {
                ...state,
                ...newDeck
            }
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case ADD_CARD_TO_DECK:
            const {question,answer,deck,correctAnswer} = action.card
            return{
                ...state,
                [deck]:{
                    ...state[deck],
                    questions:[...state[deck].questions,{question,answer,correctAnswer}]
                }
            }
        default: return state
    }
}
export default deck