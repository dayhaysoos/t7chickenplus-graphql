const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      t7chicken {
        allCharacter {
          displayName
          label
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
