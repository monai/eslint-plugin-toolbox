'use strict';

const ruleComposer = require('eslint-rule-composer');
const eslint = require('eslint');
const commaDangleRule = new eslint.Linter().getRules().get('comma-dangle');

module.exports = ruleComposer.filterReports(
  commaDangleRule,
  problem => problem.node.parent.callee.type !== 'Import',
);
