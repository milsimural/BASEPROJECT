const { Router } = require('express');

const { Theme, Quest } = require('../../db/models');

const themeRouter = Router();

themeRouter.get('/', async (req, res) => {
  try {
    const theme = await Theme.findAll();
    res.json(theme);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Ошибка при получении всех тем: ${error.theme}` });
  }
});
themeRouter.get('/:ThemeID', async (req, res) => {
  try {
    const { ThemeID } = req.params;
    const oneTheme = await Quest.findAll({
      where: {id: ThemeID}
    })
    res.json(oneTheme)
  } catch (error) {
    res
      .status(500)
      .json({ error: `Концентрация Жень в этой группе зашкаливает!!!! ${error.message}` });
  }
})


module.exports = themeRouter;
