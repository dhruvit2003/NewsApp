pipeline{
 	
	agent any

	stages {

		stage("build") {

			steps {
         		   echo 'building the application.....'			            
				script {
+                    def test = 2 + 4 > 5  ? 'very cool' : 'not cool'
					echo test
+                }
			}
		}

		stage("test") {

			steps {
			  echo 'testing the application.....'			            
			}
    	}

		stage("deploy") {
        
			steps {
			  echo 'deploying the application.....'			            
			}
    	}
	}
}
