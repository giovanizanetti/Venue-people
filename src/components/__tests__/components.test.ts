import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AppAddButton from '../AppAddButton.vue'
import AppButton from '../AppButton.vue'
import AppHeading from '../AppHeading.vue'
import AppLoading from '../AppLoading.vue'

describe('AppAddButton', () => {
  it('renders properly', () => {
    const wrapper = mount(AppAddButton, { props: { type: 'New test' } })
    expect(wrapper.text()).toContain('New test')
  })
})

describe('AppButton', () => {
  it('renders properly', () => {
    const wrapper = mount(AppButton, {
      props: { variante: 'primary', size: 'small' },
      slots: {
        default: '<div class="default-slot">Default Slot Content</div>'
      }
    })
    expect(wrapper.find('.default-slot').text()).toBe('Default Slot Content')
  })
})

describe('AppHeading', () => {
  it('renders properly', () => {
    const wrapper = mount(AppHeading, { props: { text: 'Venue People' } })
    expect(wrapper.text()).toContain('VENUE PEOPLE')
  })
})

describe('AppLoading', () => {
  it('renders properly and show the loading text', () => {
    const wrapper = mount(AppLoading, { props: { loading: true } })
    expect(wrapper.text()).toContain('Loading...')
  })

  it('shows provided error message', () => {
    const wrapper = mount(AppLoading, {
      props: {
        loading: false,
        errorMessage: 'This is an error',
        showError: true
      }
    })
    expect(wrapper.text()).toContain('This is an error')
  })

  it('shows generic error message', () => {
    const wrapper = mount(AppLoading, {
      props: { loading: false, showError: true }
    })
    expect(wrapper.text()).toContain('Something went wrong')
  })
})

// variant?: 'primary' | 'secondary' | 'danger' | 'warning'
//     size?: 'small' | 'medium' | 'large' | 'flex'
//     disabled?: boolean
//     loading?: boolean
