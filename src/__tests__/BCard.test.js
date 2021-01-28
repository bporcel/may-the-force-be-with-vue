import { mount } from '@vue/test-utils';
import BCard from '@/components/shared/BCard';

describe('BCard', () => {
  it('Renders a button that fires a function', () => {
    const wrapper = mount(BCard, {
      props: {
        name: 'Name',
        id: '1',
        handleClick: () => {},
      },
    });
    expect(wrapper.html()).toContain('Name');
  });
});
