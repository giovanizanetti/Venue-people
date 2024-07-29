import type { DirectiveBinding } from 'vue'

function getPositionClass(modifiers) {
  if (modifiers.top) {
    return 'top'
  } else if (modifiers.bottom) {
    return 'bottom'
  } else if (modifiers.left) {
    return 'left'
  } else if (modifiers.right) {
    return 'right'
  }

  return 'top'
}

export function TooltipDirective(el: HTMLElement, binding: DirectiveBinding) {
  el.setAttribute('data-tooltip', binding.value?.text || binding.value)
  el.classList.add('with-tooltip')

  const position: TPosition =
    binding.value.position || getPositionClass(binding.modifiers)
  el.classList.add(`tooltip--${position}`)
}

type TPosition = 'top' | 'bottom' | 'left' | 'right'
