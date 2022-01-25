import React from 'react';
import AntdTree, { TreeProps } from 'antd/es/tree';
import 'antd/es/tree/style/css';

const { TreeNode, DirectoryTree } = AntdTree;

const Tree = (props: TreeProps) => <AntdTree {...props} />;

Tree.TreeNode = TreeNode;
Tree.DirectoryTree = DirectoryTree;

export default Tree;
