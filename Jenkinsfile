pipeline {
    agent any
    
    tools {nodejs "node"}

    stages {
        stage('Start') {
            steps {
                echo 'started running the pipeline'
            }
        }
        stage('Clone the repository') {
            steps {
                git url: 'https://github.com/AlbertNjaneKimani/gallery.git', branch: 'master'
            }
        }
        stage('Get Latest Commit') {
            steps {
                sh '''
                   export COMMIT=$(git log --oneline | awk '{print $1}' | head -n 1)
                   echo $COMMIT
                   '''
            }
        }
        stage('Install node dependencies') {
            steps {
                sh '''
                   npm install
                   '''
            }
        }
        stage('Run Tests') {
            steps {
                sh '''
                npm test
                '''
            }
        }
        stage('Deploy to Render') {
            steps {
                sh '''
                   curl -X POST https://api.render.com/deploy/srv-cgbni61mbg55nqndm9n0?key=$COMMIT
                   '''
            }
        }
        stage('End') {
            steps {
                echo 'The build has ended'
            }
        }
    }
    post {
            failure {
                mail to: 'albertnjanek@gmail.com',
                subject:"FAILURE: ${currentBuild.fullDisplayName}",
                body: "Pipeline Failed."
            }
        }
        
        }