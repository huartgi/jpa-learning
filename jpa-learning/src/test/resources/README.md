UFO: Web Application Java EE 7 with JSF (JavaServer Faces) 
==================================================================
*Technologies* : CDI, EJB, JPA, JSF, RichFaces  
*App server* : JBoss 7.1

Requirements
-------------------

Developing in this project requires :
 * IntelliJ IDEA
 * Git
 * Maven 3.0 or greater.
 * JBoss 7

Maven
---------------

1. [Download Maven](http://maven.apache.org/)
2. Unzip inside C:\work\apps
3. Add system variable M2_HOME targeting the install folder (C:\work\apps\apache-maven-<version>)
4. Add %M2_HOME%\bin in the PATH
5. Copy k98-ufo\a_k98\ufo-config\maven\settings into %M2_HOME%\conf\settings.xml
6. Test with following command
>  mvn -version

Expected result 
> Apache Maven 3.6.0 (97c98ec64a1fdfee7767ce5ffb20918da4f719f3; 2018-10-24T20:41:47+02:00)  
> Maven home: C:\work\apps\apache-maven-3.6.0  
> Java version: 1.8.0_201-2-redhat, vendor: Oracle Corporation, runtime: C:\work\apps\openjdk-1.8.0.201-2.b09.redhat.windows.x86_64\jre  
> Default locale: fr_FR, platform encoding: Cp1252  
> OS name: "windows 10", version: "10.0", arch: "amd64", family: "windows"


Databean generation
------------------

To generate databeans, here is the process :

1. Copy the message from ___K:\Flux\SupportDev\CKV\PRD\CKVCKVMSGCS\Recv___ to ___k98-ufo\a_k98\ufo-paren\ufo-web\src\main\resources\messages-pacte___
2. Add an \<execution\> block corresponding to this message into the k98-ufo\a_k98\ufo-paren\ufo-web\pom.xml (inside profile generate-databean)  
   Refer to this documentation for further information: https://confluence-mut.d.bbg/pages/viewpage.action?pageId=5706978
3. From the ufo-web project, execute the following command:
> mvn clean generate-sources -Pgenerate-databean

Message transformation (regex)
------------------

If for some reason, the fields of a message are suddenly prefixed by "MSG_", you will have to change the code accordingly on the getters/setters of the new databean generated.
Example, in the message, the field CODIUP becomes MSG-CODIUP.

Before: 
* databean.setCodiup(...
* databean.setLinuti(...

After: 
* databean.setMsg_codiup(...
* databean.setMsg_linuti(...

This can be done automatically using a regex :
* Replace: databean.set(.?)
* With: databean.setMsg_\L$1

It will search for the string "databean.set" followed by one character
And and replace it with "databean.setMsg_" followed by this character ($1) transformed in lowercase (\L).
