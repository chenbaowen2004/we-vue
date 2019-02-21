import '../../scss/badge.scss'
import Vue, { VNode } from 'vue'

export default Vue.extend({
  name: 'wv-badge',

  functional: true,

  props: {
    color: String,
    isDot: Boolean,
  },

  render (h, context): VNode {
    return (
      <span
        class={{
          'weui-badge': true,
          'weui-badge_dot': context.props.isDot,
        }}
        style={{
          backgroundColor: context.props.color,
        }}
      >
        { !context.props.isDot ? context.children : h() }
      </span>
    )
  },
})
