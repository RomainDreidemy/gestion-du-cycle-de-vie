pipeline {
  agent {
    node {
      label 'ls'
    }

  }
  stages {
    stage('Build') {
      agent {
        node {
          label 'node'
        }

      }
      steps {
        sh 'ls -la'
      }
    }

  }
}