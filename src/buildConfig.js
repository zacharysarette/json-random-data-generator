module.exports = {
  makeArrayField: (name = '', values = []) => {
    return {
      name,
      type: 'arr',
      values
    }
  },
  makeValueField: (name = '', values = []) => {
    return {
      name,
      type: 'val',
      values
    }
  },
  makeDateField: (name = '', values = []) => {
    return {
      name,
      type: 'date',
      values
    }
  },
  makeNumberField: (name = '', values = []) => {
    return {
      name,
      type: 'num',
      values
    }
  },
  makeNumberFloatField: (name = '', values = []) => {
    return {
      name,
      type: 'numFloat',
      values
    }
  },
  buildConfigObject: ({ objectArrayName = '', fields = [] }) => {
    return { [objectArrayName]: fields }
  }
}
