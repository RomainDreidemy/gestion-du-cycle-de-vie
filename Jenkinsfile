pipeline {
    agent {
        docker {
            image 'node:alpine'
        }
    }

    stages {
        if(env.BRANCH_NAME == 'main'){
            stage('Build') {
                steps {
                    sh 'npm -v'
                    sh 'npm install'
                    sh 'npm run build'
                    sh 'ls -la ./build'
                }
            }
        }
    }
}
