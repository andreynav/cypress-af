pipeline {
    agent any

    tools {nodejs "NodeJS-16.17.0"}

    stages {
        stage('Cypress Test Suite') {
            steps {
                git url: 'git@github.com:andreynav/cypress-af.git'
                sh 'npm install'
                sh 'npm update'
                sh 'npm run cy-test-onetest'
            }
        }
    }
}
