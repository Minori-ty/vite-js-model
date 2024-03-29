'use strict'

module.exports = {
    types: [
        { value: 'sparkles', name: 'feat:     新功能' },
        { value: ':wrensh:', name: 'fix:      修复bug' },
        { value: ':page_facing_up:', name: 'docs:     文档变更' },
        { value: ':art:', name: 'style:    代码格式(不影响代码运行的变动)' },
        { value: ':recycle:', name: 'refactor: 重构(既不是增加feature，也不是修复bug)' },
        { value: ':zap:', name: 'perf:     性能优化' },
        { value: ':white_check_mark:', name: 'test:     增加测试' },
        { value: ':memo:', name: 'chore:    构建过程或辅助工具的变动' },
        { value: 'revert', name: 'revert:   代码回退' },
        { value: ':tada:', name: 'build:    变更项目构建或外部依赖' },
    ],
    scopes: [
        ['api', 'api相关'],
        ['components', '组件相关'],
        ['hooks', 'hook相关'],
        ['tools', 'tools相关'],
        ['styles', '样式相关'],
        ['deps', '项目依赖相关'],
        ['other', '其他修改相关'],
        // 如果选择 custom，后面会让你再输入一个自定义的 scope。也可以不设置此项，把后面的 allowCustomScopes 设置为 true
        ['custom', '以上都不是？我要自定义'],
    ].map(([value, description]) => {
        return {
            value,
            name: `${value.padEnd(30)} (${description})`,
        }
    }),

    // 交互提示信息
    messages: {
        type: '请选择提交类型:',
        // scope: '请输入文件修改范围(可选):',
        // used if allowCustomScopes is true
        customScope: '请输入修改范围(可选):',
        subject: '请简要描述提交(必填):',
        body: '请输入详细描述(可选，待优化去除，跳过即可):',
        // breaking: 'List any BREAKING CHANGES (optional):\n',
        footer: '请输入要关闭的issue(待优化去除，跳过即可):',
        confirmCommit: '确认使用以上信息提交？(y/n/e/h)',
    },
    allowCustomScopes: true,
    allowBreakingChanges: ['新增', '修复'],

    // 跳过要询问的步骤
    skipQuestions: ['body', 'breaking', 'footer'],

    // subject 限制长度
    subjectLimit: 100,
}
