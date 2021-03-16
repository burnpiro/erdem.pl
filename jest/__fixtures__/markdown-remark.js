module.exports = {
  markdownRemark: {
    id: 'test-123',
    html: '<p>test</p>',
    htmlAst: { children: [], data: { quirksMode: false }, type: 'root' },
    fields: {
      tagSlugs: ['/test_0', '/test_1'],
    },
    frontmatter: {
      date: '2016-09-01',
      description: 'test',
      title: 'test',
      tags: ['test_0', 'test_1'],
    },
  },
};
