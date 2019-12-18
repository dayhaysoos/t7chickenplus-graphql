const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      t7chicken {
        allCharacter {
          displayName
          label
          movelist {
            preview_url
            move_name
            notation
            hit_level
            range
            pushback
            tracking
            crush
            jail
            natural
            environmental
            cancelable
            meter_gain
            damage
            speed
            on_block
            on_hit
            on_ch
            on_whiff
            in_air
            active_frames
            notes
            id
          }
        }
      }
    }
  `)

  data.t7chicken.allCharacter.forEach(character => {
    actions.createPage({
      path: character.label,
      component: path.resolve('./src/components/character.js'),
      context: {
        characterData: character,
      },
    })
  })
}
