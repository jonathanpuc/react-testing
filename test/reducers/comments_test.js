import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
    it('handles action with unknown type', () => {
        const action = { type: 'asdasdsad', payload: 'asdsadsd' }
        expect(commentReducer([], action)).to.eql([]);

    });

    it('handles action of type SAVE_COMMENT', () => {
        const action = { type: SAVE_COMMENT, payload: 'New comment' }
        expect(commentReducer([], action)).to.eql(['New comment'])
    })
})
