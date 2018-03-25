import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
    let component;

    beforeEach(() => {
        const props = { comments: ['This is awesome', 'Love it', 'Great content'] }
        component = renderComponent(CommentList, null, props);
    })

    it('shows an LI for each comment', () => {
        expect(component.find('li').length).to.equal(3);
    })

    it('shows each comment that is provided', () => {
        expect(component).to.contain('This is awesome');
        expect(component).to.contain('Love it');
        expect(component).to.contain('Great content');
    })

}) 