pipeline {
    agent any // Use any available agent for this pipeline

    // Define environment variables for the pipeline
    environment {
        RENDER_EMAIL = credentials('albertnjanek@mail.com') // Retrieve the Render email credential from Jenkins
        RENDER_PASSWORD = credentials('P@55word') // Retrieve the Render password credential from Jenkins
        RENDER_PROJECT_ID = 'render' // Set your Render project ID
        RENDER_SERVICE_NAME = 'jenkins3' // Set your Render service name
    }

    stages {
        stage('Clone repository') {
            steps {
                git 'https://github.com/AlbertNjaneKimani/gallery.git' // Clone the repository from GitHub
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'cd gallery && npm install' // Install the Node.js dependencies
            }
        }
        stage('Build') {
            steps {
                sh 'cd gallery && npm run build' // Build the Node.js application
            }
        }
        stage('Deploy to Render') {
            steps {
                // Use the Render CLI tool to deploy the Node.js application
                withCredentials([usernamePassword(credentialsId: 'render', usernameVariable: 'RENDER_EMAIL', passwordVariable: 'RENDER_PASSWORD')]) {
                    sh "curl -L https://render.com/download/cli/latest/linux/render -o ~/render && chmod +x ~/render" // Download the Render CLI tool and make it executable
                    sh "~/render login --email $RENDER_EMAIL --password $RENDER_PASSWORD" // Authenticate the Render CLI tool with your Render account
                    sh "sh "~/render deploy --directory gallery --name $RENDER_SERVICE_NAME --project $RENDER_PROJECT_ID --verbose"
" // Deploy the Node.js application to Render
                }
            }
        }
    }

}
