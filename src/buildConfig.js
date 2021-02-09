module.exports = class buildConfig {
  static makeArrayField (name = '', values = []) {
    return {
      name,
      type: 'arr',
      values
    }
  }

  static makeValueField (name = '', values = []) {
    return {
      name,
      type: 'val',
      values
    }
  }

  static makeDateField (name = '', values = []) {
    return {
      name,
      type: 'date',
      values
    }
  }

  static makeNumberField (name = '', values = []) {
    return {
      name,
      type: 'num',
      values
    }
  }

  static makeNumberFloatField (name = '', values = []) {
    return {
      name,
      type: 'numFloat',
      values
    }
  }

  static buildConfigObject ({ objectArrayName = '', fields = [] }) {
    return { [objectArrayName]: fields }
  }
}
